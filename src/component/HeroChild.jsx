/* eslint-disable react/prop-types */

const HeroChild = (props) => {
    return (
      <div>
        <h1>Hello Hero</h1>

        <ul>
          <li>Name:{props.item["name"]} </li>
          <li>Age: {props.item["age"]}</li>
          <li>City:{props.item["city"]}</li>
        </ul>

        <h5>{props.title}</h5>

        <button onClick={props.childBtn}>Submit</button>
      </div>
    );
};

export default HeroChild;