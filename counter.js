class Counter extends React.Component{

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            value:0
        }
    }

   handleClick(){
       let newState = {
           value: this.state.value + 1 
       }
        console.log("clicked");
        this.setState(newState);
   }

    render(){
        return <div><span>{this.state.value}</span><button onClick={() => this.handleClick()}>Count</button></div>
    }
}