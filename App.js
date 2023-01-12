import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/Home';
import API from './pages/API';
import Login from './pages/Login';
import { useState } from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';

export default function App() {
  const [menuID, setMenuID] = useState(0)
  const [jwt, setJWT] = useState("")
  

  return (
    <NativeRouter> 
      <SafeAreaView style={styles.container}>
        <Header setMenuID={setMenuID} style={{flex: 1}}/>  
        {menuID !== 0 ? <Menu menuID={menuID} setMenuID={setMenuID}/> : <></>}

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/api' element={<API />} />
        </Routes>

        <StatusBar style="auto" />
      </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
});
