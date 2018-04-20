import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import Head from '../../common/Head'
export default class CardListExample extends Component {
  render() {
    return (
      <Container>
      <Head title='CardList' 
         pushDetails = {() => {this.props.navigation.goBack();}
       }/>
        <Content>
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}