import React from 'react';
import loadingHOC from './Loading';
import CollapseRP from './CollapseRP';

function People(props) {
  let people = props.people.map((e, i) => (
    <CollapseRP title={e.name} key={i}>
      {(styles) => (
        <div style={styles}>
          <p>Hair color: { e.hair_color }</p>
          <p>Eye color: { e.eye_color }</p>
          <p>Height: { e.height }</p>
        </div>)
      }
    </CollapseRP>
  ))

  return (
    <div>
      { people }
    </div>
  )
}

export default loadingHOC(People)