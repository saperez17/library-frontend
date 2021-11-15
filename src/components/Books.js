import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_BOOKS } from 'queries';

const Books = (props) => {

  const result = useQuery(ALL_BOOKS);
  const [ filter, setFilter ] = useState('');

  const onFilterChange = (filterValue) => {
    if (!filterValue){
      setFilter('')
    }
    setFilter(filterValue)
  }

  if (!props.show) {
    return null
  }
  if (result.loading){
    return <div>...loading</div>
  }

  if (!result.data.allBooks.length) {
    return <div>no results</div>
  }

  const allGenres = result.data.allBooks.map(book => book.genres).flat();
  const filteredBooks = !filter
  ? result.data.allBooks
  : result.data.allBooks.filter(book => book.genres.includes(filter) ? book : null)

  return (
    <div>
      <h2>books</h2>
      <p>in genre <b>{!filter ? 'All genres' : filter }</b></p>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              author
            </th>
            <th>
              published
            </th>
          </tr>
          {filteredBooks.map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        {allGenres.map(genre =>
          <button key={genre} onClick={() => onFilterChange(genre)}>{genre}</button>)}
          <button onClick={() => setFilter("")}>All genres</button>
      </div>
    </div>
  )
}

export default Books