import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Keyboard, Pressable, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';

export default function App() {

  const [vailPhone, setVailPhone] = useState('')
  const [answer, setAnswer] = useState('')
  const phoneNum = '0912345678'
  const [picVail, setPicVail] = useState(require('./src/image/phone_man1_smile.png'))
  let [count, setCount] = useState(0)

  const checkNum = () => {
    if (vailPhone == phoneNum) {
      setAnswer('耶~~~\n阿強終於成功打給你了')
      setPicVail(require('./src/image/phone_man4_laugh.png'))
    }else if(vailPhone == ''){
      setAnswer('')
    }
    else{
      setAnswer('欸...阿強打不通耶\n是不是電話錯了呢?')
      setPicVail(require('./src/image/phone_man3_cry.png'))
      setCount(count + 1)
    }
    if (count > 2){
      setAnswer('欸...阿強還是打不通耶...\n要不要作弊一下看看')
      setCount(0)
    }
    Keyboard.dismiss(); // 關閉鍵盤
  }

  return (
    // 點擊空白處關閉鍵盤
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      {/* 鍵盤顯示時，頁面向上推移 */}
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <Image style={styles.img_style} source={picVail}/>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.situation_text}>阿強要打電話給你，{"\n"}可是他忘記妳的電話了，{"\n"}把你的電話再告訴阿強一次吧!</Text>
          <Text style={styles.answer_text}>{answer}</Text>
        </View>
      </View>

      <View>
      <Text style={{marginTop:10, textAlign:'center'}}>我的電話應該是 {vailPhone} ?</Text>
      <TextInput
        style = {styles.text_input}
        onChangeText = {(text) => setVailPhone(text)}
        value = {vailPhone}  // 顯示輸入的文字
        maxLength = {10} // 限制輸入的字數
        placeholder = '告訴阿強你的電話'  // 預設文字
        keyboardType = {'numeric'}  // 顯示鍵盤樣式
      />
      {/* 確認按鈕 */}
      <Pressable
      style={styles.btn}
      onPress = {() => checkNum()}>
        <Text style={{color: '#E2EADA', fontWeight: "bold", fontSize: 15}}>這就是我的電話</Text>
      </Pressable>
      {/* 確認按鈕 */}
      <Text style={styles.cheat_text} onPress={()=> setVailPhone(phoneNum)}>請讓我作弊</Text>
      </View>
      </KeyboardAvoidingView>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2EADA",
    alignItems: 'center',
    justifyContent: 'center',
  },
  img_style: {
    width: 150,
    height: 200,
  },
  text_input: {
    textAlign: 'center',
    width: 280,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#f4f4f4",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    marginTop: 10
  },
  btn: {
    marginTop: 10,
    alignItems: 'center',
    alignSelf:'center',
    paddingVertical:12,
    paddingHorizontal: 24,
    borderRadius: 16,
    backgroundColor: "#989F86"
  },
  answer_text:{
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 14,
    color: "#87553C",
    textAlign: 'center',
    lineHeight: 20,
    alignSelf: 'flex-end',
    paddingTop:60
  },
  situation_text:{
    color:'#868A50',
    alignSelf:'center',
    fontWeight:'bold',
    lineHeight:20,
    fontSize:16
  },
  cheat_text:{
    marginTop:50,
    textDecorationLine:'line-through',
    textAlign:'center',
    opacity: 0.1
  }
});
