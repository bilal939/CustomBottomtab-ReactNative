import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

function MyTabBar({state, descriptors, navigation}) {
  console.log(state.routes);
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#0FA79E',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: '100%',
        height: 60,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        console.log(options);
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          console.log(event);
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <>
            <Pressable
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              key={route.name}>
              {route.name === 'Home' ? (
                isFocused ? (
                  <View style={styles.ActiveTabView}>
                    <Image
                      source={require('../assets/focusHouse.png')}
                      style={styles.ActiveImagestyle}
                    />
                    <Text style={styles.ActiveText}>{label}</Text>
                  </View>
                ) : (
                  <Image
                    source={require('../assets/House.png')}
                    style={{width: 20, height: 20, resizeMode: 'contain'}}
                  />
                )
              ) : route.name === 'Search' ? (
                isFocused ? (
                  <View style={styles.ActiveTabView}>
                    <Image
                      source={require('../assets/FocusMagnifyingGlass.png')}
                      style={styles.ActiveImagestyle}
                    />
                    <Text style={styles.ActiveText}>{label}</Text>
                  </View>
                ) : (
                  <Image
                    source={require('../assets/MagnifyingGlass.png')}
                    style={{width: 20, height: 20, resizeMode: 'contain'}}
                  />
                )
              ) : route.name === 'Favorite' ? (
                isFocused ? (
                  <>
                    <View style={styles.ActiveTabView}>
                      <Image
                        source={require('../assets/focusFavorite.png')}
                        style={styles.ActiveImagestyle}
                      />
                      <Text
                        style={{
                          marginLeft: 5,
                          color: '#0FA79E',
                          fontWeight: '700',
                        }}>
                        {label}
                      </Text>
                    </View>
                  </>
                ) : (
                  <>
                    <Image
                      source={require('../assets/favorite.png')}
                      style={{width: 20, height: 20, resizeMode: 'contain'}}
                    />
                  </>
                )
              ) : route.name === 'Chats' ? (
                isFocused ? (
                  <>
                    <View style={styles.ActiveTabView}>
                      <Image
                        source={require('../assets/focusChats.png')}
                        style={styles.ActiveImagestyle}
                      />
                      <Text
                        style={styles.ActiveText}>
                        {label}
                      </Text>
                    </View>
                  </>
                ) : (
                  <>
                    <Image
                      source={require('../assets/Chats.png')}
                      style={{width: 20, height: 20, resizeMode: 'contain'}}
                    />
                  </>
                )
              ) : route.name === 'Profile' ? (
                isFocused ? (
                  <>
                    <View style={styles.ActiveTabView}>
                      <Image
                        source={require('../assets/focusUser.png')}
                        style={styles.ActiveImagestyle}
                      />
                      <Text
                        style={styles.ActiveText}>
                        {label}
                      </Text>
                    </View>
                  </>
                ) : (
                  <>
                    <Image
                      source={require('../assets/User.png')}
                      style={{width: 20, height: 20, resizeMode: 'contain'}}
                    />
                  </>
                )
              ) : null}
            </Pressable>
          </>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  ActiveTabView: {
    flexDirection: 'row',
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  ActiveImagestyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  ActiveText: {
    marginLeft: 5,
    color: '#0FA79E',
    textTransform:'uppercase',
    fontWeight: '700',
  },
});

export default MyTabBar;
