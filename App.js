

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

const tipRates = [
  { key: '0.05', label: '5%' },
  { key: '0.10', label: '10%' },
  { key: '0.15', label: '15%' },
  { key: '0.18', label: '18%' },
  { key: '0.20', label: '20%' },
];

export default function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tipRate, setTipRate] = useState(tipRates[0].key);

  const calculateTip = () => {
    const tipAmount = parseFloat(billAmount) * parseFloat(tipRate);
    return isNaN(tipAmount) ? 0 : tipAmount.toFixed(2);
  };

  const calculateTotal = () => {
    const total = parseFloat(billAmount) + parseFloat(calculateTip());
    return isNaN(total) ? 0 : total.toFixed(2);
  };


  const renderTipRateItem = ({ item }) => (
    <Text
      style={[styles.tipRateItem, tipRate === item.key && styles.activeTipRateItem]}
      onPress={() => setTipRate(item.key)}
    >
      {item.label}
    </Text>
  );

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Tip Calculator</Text>

    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Bill Amount:</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        onChangeText={(text) => setBillAmount(text)}
        value={billAmount}
      />
    </View>

    <Text style={styles.tipRateLabel}>Tip Rate:</Text>
    <FlatList
      data={tipRates}
      renderItem={renderTipRateItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tipRateListContainer}
    />
    

    <View style={styles.tipContainer}>
        <View style={styles.receiptRow}>
          <Text style={styles.receiptLabel}>Bill Amount:</Text>
          <Text style={styles.receiptValue}>${billAmount}</Text>
        </View>

        <View style={styles.receiptRow}>
          <Text style={styles.receiptLabel}>Tip %:</Text>
          <Text style={styles.receiptValue}>{tipRate * 100}%</Text>
        </View>

        <View style={styles.receiptRow}>
          <Text style={styles.receiptLabel}>Tip Amount:</Text>
          <Text style={styles.receiptValue}>${calculateTip()}</Text>
        </View>

        <View style={styles.receiptRow}>
          <Text style={[styles.receiptLabel, styles.receiptTotalLabel]}>Final Total:</Text>
          <Text style={[styles.receiptValue, styles.receiptTotalValue]}>${calculateTotal()}</Text>
        </View>

      </View>

  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEE1F2',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1D04BF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#15038C',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#2E34A6',
    borderRadius: 5,
    fontSize: 16,
    color: '#2E34A6',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  tipRateLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#15038C',
  },
  tipRateListContainer: {
    paddingBottom: 0,
  },
  tipRateItem: {
    padding: 10,
    minWidth: 50,
    textAlign: 'center',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2E34A6',
    marginRight: 10,
    color: '#2E34A6',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  activeTipRateItem: {
    backgroundColor: '#04D9D9',
    borderColor: '#04D9D9',
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  tipContainer: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  receiptRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  receiptLabel: {
    fontSize: 16,
    color: '#15038C',
  },
  receiptValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E34A6',
  },
  receiptTotalLabel: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D04BF',
  },
  receiptTotalValue: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E34A6',
  },
});

