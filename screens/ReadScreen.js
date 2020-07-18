import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadScreen extends React.Component{
    constructor(){
        super(
         this.state({
             allStories:[],
             dataSource:[],
         })
        )  
    };
    componentDidMount(){
        this.retriveStories()
    }

    retriveStories=()=>{
        try{
            var allStories=[];
            var stories = db.collection("stories")
            .get().then((querySnapshot)=>{
                  querySnapshot.forEach((doc) => {
                //doc.data()is undefined for query docsnapshots
                
                allStories.push.apply(doc.data())
                   console.log('this are the stories',allStories)
                  })
                 this.setState({allStories}) 
            })
        }
        catch(error){
        console.log(error)
        }
    };

    SearchFilterFunction=()=>{
        //paasing the input in the text input
        const newData=this.state.allStories.filter((text)=>{
              //applying filter for the search bar
              const itemData=item.title?item.title.toUpperCase():''.toUpperCase();
              const textData=text.toUpperCase();
              return itemData.indexOf(textData)> -1;
                    });
                this.setState({
                    //setting the filterd newdata on dataSource 
                    //after setting the it wil automatically re-render the view
                    dataSource:newData
                })    
              }
render(){
    return(
        <View>
        </View>
    )
}
}

const Styles = StyleSheet.create({
    text:{
        textAlign:'center',
        color:'red'
    }
});