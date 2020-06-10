import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {altura: 0, massa: 0, resultado: 0, resultadoText: ''};
    this.calcular = this.calcular.bind(this);
  }
  calcular() {
    let imc = this.state.massa / (this.state.altura * this.state.altura);
    let s = this.state;
    s.resultado = imc;

    if (s.resultado < 16) {
      s.resultadoText = '< 16 Magreza grave';
    } else if (s.resultado < 17) {
      s.resultadoText = '16 a < 17 Magreza moderada';
    } else if (s.resultado < 18.5) {
      s.resultadoText = '17 a < 18.5 magreza leve';
    } else if (s.resultado < 25) {
      s.resultadoText = '18.5 a < 25 Saudável';
    } else if (s.resultado < 30) {
      s.resultadoText = '25 a < 30 sobrepeso ';
    } else if (s.resultado < 35) {
      s.resultadoText = '30 a < 35 Obesidade Grau I';
    } else if (s.resultado < 40) {
      s.resultadoText = '35 a < 40 Obesidade Grau II (Severa)';
    } else {
      s.resultadoText = '> 40 Obesidade Grau III (Mórbida)';
    }
    this.setState(s);
    //<16 Magreza grave
    //16 a < 17 Magreza moderada
    //17 a < 18.5 magreza leve
    //18.5 a < 25 Saudável
    //25 a < 30 sobrepeso
    //30 a < 35 Obesidade Grau I
    //35 a < 40 Obesidade Grau II (Severa)
    //> 40 Obesidade Grau III (Mórbida)
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <View style={StyleSheet.entradas}>
          <TextInput
            placeholder="Altura"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={altura => {
              this.setState({altura});
            }}
          />
          <TextInput
            placeholder="Massa"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={massa => {
              this.setState({massa});
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.massa}>Índice de Massa:</Text>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(1)}</Text>
        <Text style={styles.resultado}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AcAcac',
  },
  entradas: {
    flexDirection: 'row',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
  },
  button: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 50,
    color: '#777',
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'center',
    color: 'gray',
    padding: 15,
    fontSize: 35,
  },
  massa: {
    alignSelf: 'center',
    color: 'gray',
    padding: 15,
    fontSize: 20,
  },
});
