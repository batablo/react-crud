import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 15 },
    { name: "NoName"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>私は{props.name}です！年齢は{props.age}歳です！</div>
}

//プロパティの初期値を設定
User.defaultProps = {
  age: 1
}

export default App;
