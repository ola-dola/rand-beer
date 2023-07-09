import {TbError404}from 'react-icons/tb'

export const PageNotFound = () => {
  return (
    <div className='not-found'>
      <TbError404 />
      <h2>Beer not found</h2>
      <p>No beer for the search term you entered</p>
      <button onClick={() => window.location.reload()}>Back home</button>
    </div>
  )
}
