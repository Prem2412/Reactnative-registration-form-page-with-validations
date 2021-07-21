import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, ScrollView, ActivityIndicator } from 'react-native';

class app extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      mobile: "",
      email: "",
      cpass: ""
    }
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} >

        <View style={styles.head}>
          {/* <Image source={require('./img/logo.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
          <Text style={styles.heading}>Registration</Text>
        </View>
        <View style={styles.input}>
          <TextInput placeholder="UserName" style={styles.textinput} placeholderTextColor="white"
            onChangeText={(value) => { this.setState({ name: value.trim() }) }}
            maxLength={50} />
          <TextInput placeholder="Email" style={styles.textinput} placeholderTextColor="white"
            onChangeText={(value) => { this.setState({ email: value.trim() }) }} />
          <TextInput placeholder="Passsword" style={styles.textinput} placeholderTextColor="white"
            onChangeText={(value) => { this.setState({ password: value.trim() }) }}
            maxLength={10}
            secureTextEntry={true} />
          <TextInput placeholder="Confrim Passsword" style={styles.textinput} placeholderTextColor="white"
            onChangeText={(value) => { this.setState({ cpass: value.trim() }) }} />
          <TextInput placeholder="Mobile No." style={styles.textinput} placeholderTextColor="white"
            onChangeText={(value) => { this.setState({ mobile: value.trim() }) }}
            maxLength={12} />
          <TouchableOpacity
            onPress={() => { valid(this.state.name, this.state.email, this.state.password, this.state.cpass, this.state.mobile) }}
            style={styles.btn}>
            <Text style={{ alignSelf: "center", color: "white", fontSize: 20 }}  > Sign UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => Alert.alert("Redirecting to login Page")} >
            <Text color="#64c3e8"> Already Have a Account? Login here </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const valid = (name, email, p, cpass, mobile) => {
  if (name == '') {
    alert("Please Fill UserName")
  }
  else if (email == '') {
    alert("Please Fill Email")
  }
  else if (p == '') {
    alert("Fill Passowrd")
  }
  else if (p.length <= 6 || p.length >= 10) {
    alert("Password length betweeen 6 to 10")
  }
  else if (cpass != p) {
    alert("Password mismatched")
  }
  else if (mobile == '') {
    alert("Plese Fill Mobile Number")
  }
  else if (mobile.length <= 10 || mobile.length >= 12) {
    alert("Mobile Number length should be 10")
  }
  else {
    alert("done")
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2f3566"
  },
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    color: "#efcbbd"
  },
  head: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 2,
    justifyContent: 'space-evenly',
    width: "75%",

  },
  textinput: {
    padding: 10,
    height: "10%",
    borderRadius: 30,
    // color: "red",
    backgroundColor: "#6a7b83",
  },
  bottom: {
    flex: .250,
    justifyContent: 'center',
    alignItems: 'center',
    width: "75%",
  },
  btn: {
    height: "10%",
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: "#1c313a",
    color: "red"
  },
})
export default app;


{/* <View style={styles.head}>
          <TouchableOpacity style={styles.back}>
            <Image source={require('./img/left.png')} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.headtext}>Sign Up</Text>
        </View> */}