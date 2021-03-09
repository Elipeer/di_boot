import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import 'tachyons';
import {connect} from 'react-redux';
import {getData} from './redux/actions'
import {getFetch} from './redux/actions'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
    //  rb:[],
      // searchText: '',
    }
  }

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => {
    //   this.props.getData(data)
    // })
    // .catch(err =>{
    //   console.log(err);
    // })
    this.props.getData()

  }

  // handleSearch = (event) => {
  //   this.setState({searchText:event.target.value});
  // }

  render() {
    const {searchText,getData,desc} = this.props;

    const filterRobots = desc.filter( item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
          <>
            <SearchBox />
            <CardList robots = {filterRobots}/>
          </>
        )
  }
}

const mapStateToProps = (state) => {
  return{
    searchText: state.reducer1.searchText,
    desc: state.weatherDesc.desc,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      getData: () => dispatch(getData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
