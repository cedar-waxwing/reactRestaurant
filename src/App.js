
import React from "react";
import Header from "./components/Header"
import MenuSection from "./components/MenuSection"
import './App.css';
import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSections: [],
    }
  }

  componentDidMount = () => {

    //local storage ________________________________

    let menuSections = window.localStorage.getItem("menuSections")

    if (menuSections) {
      this.setState({ menuSections: JSON.parse(menuSections) })
    } else {
      //menu sections___________________________________________
      let apiURL = "http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/sections"
      axios.get(apiURL)
        .then((response) => {
          // handle success
          this.setState({ menuSections: response.data.slice(0, 5) })
          console.log(this.state.menuSections[0])
        })
        .catch(function (error) {
          console.log(error);
        })

      //calling foodItems________________________________________
      for (let i = 0; i < 2; i++) {
        this.foodItemsCall()
    }
  }
}

  //food items_________________________________________
  foodItemsCall = () => {
    let apiFoodURL = "http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/items/42"
    axios.get(apiFoodURL)
      .then((response) => {
        console.log(response.data)
        let menuCopy = [...this.state.menuSections]
        for (let i = 0; i < menuCopy.length; i++) {
          for (let j = 0; j < response.data.length; j++) {
            response.data[j].price = this.itemPrice()
            if (menuCopy[i].type == response.data[j].meal_type.type) {
              if (menuCopy[i].menuItems) {
                menuCopy[i].menuItems.push(response.data[j])
              } else {
                menuCopy[i].menuItems = [response.data[j]]
              }
            }
          }
        }
        this.setState({ menuSections: menuCopy })
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  componentDidUpdate = () => {
    window.localStorage.setItem("menuSections", JSON.stringify(this.state.menuSections));
    console.log(this.state.menuSections)
    //this.insertfunction();
  }

  itemPrice = () => {
    return Math.floor(Math.random() * 30) + 10
  }

  //________________________________________________

  render = () => {
    return (
      <div className="container">
        <div className="row align-items-start">
          <div className="card-body">
            <Header />
          </div>
          <div className="card-body col-6 accordion accordion-flush" id={"accordionFlushExample"}>
            {this.state.menuSections.map((section, index) => <MenuSection key={section.id} section={section} index={index}/>)}
          </div>
        </div>
      </div>
    )
  }

}

export default App;
