import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../Components/Card';
import Swiper from 'react-native-deck-swiper';
import {cardData} from '../Components/Data';

const Home = () => {
  const [index, setIndex] = useState(0);
  const onSwiped = () => {
    setIndex(index + 1);
  };
  return (
    <View style={styles.mainView}>
      <Swiper
        cards={cardData}
        cardIndex={index}
        renderCard={card => <Card props={card} />}
        onSwiped={onSwiped}
        stackSize={6}
        stackScale={10}
        stackSeparation={10}
        disableBottomSwipe
        disableTopSwipe
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                backgroundColor: '#ec2379',
                color: 'white',
                fontsize: 20,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                top: 5,
              },
            },
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: 'blue',
                color: 'white',
                fontsize: 20,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginLeft: 28,
              },
            },
          },
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
