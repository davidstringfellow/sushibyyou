import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {HomeScreen} from '../HomeScreen';
import { DetailsScreen } from '../DetailsScreen';
import { ImageScreen } from '../ImageScreen';
import { TitleElement } from './TitleElement';



const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    <TitleElement />
    return <DrawerContentScrollView {...props}>
        <View style={styles.header}>
            <View style={styles.headerText}>
                <Text style={styles.headerText}>Sushi By You &#127843;</Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => props.navigation.closeDrawer()}
                >
                    <Text style={styles.closeButton}>&#x02297;</Text>
                </TouchableOpacity>
            </View>
        </View>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
}

const PageDrawer = () => {
    return (
        <>
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerType: 'slide',
                }}
                initialRouteName="Home"
                drawerContent={(props) => <CustomDrawer {...props} />}>
                    <Drawer.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                    <Drawer.Screen options={{ headerShown: false }} name="Details" component={DetailsScreen} />
                    <Drawer.Screen options={{ headerShown: false }} name="Images" component={ImageScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        //height: '100%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 30,
    },
    headerText: {
        flex: 1,
        justifyContent: 'flex-start',
        textAlign: 'left',
        paddingLeft: 10,
        fontSize: 20
    },
    closeButton: {
        flex: 1,
        justifyContent: 'flex-end',
        textAlign: 'right',
        fontSize: 20, 
        paddingRight: 10
    }

});


export { PageDrawer };