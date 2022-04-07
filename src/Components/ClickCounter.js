import withCounter from "../HOC/withCounter";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
    return (
      <div>
        <button  type="button" onClick={incrementCount} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">Click {count} Time</button>
      </div>
    )
}

export default withCounter(ClickCounter);