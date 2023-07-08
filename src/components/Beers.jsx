import Beer from './Beer'

const Beers = ({beers, removeBeer}) => {
  return (
    <main>
        <section>
      <div className="title">
        <h2>our beers</h2>
        <div className="title-underline"></div>
      </div>
      <div className="beers">
      {beers.map((beer) => {
          return <Beer key={beer.id} {...beer} removeBeer={removeBeer} />
        })}
       </div>
    </section>
    </main>
  )
}

export default Beers

