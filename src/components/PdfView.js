import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        paddding: 10,
        flexGrow: 1
    }
});

class PdfView extends Component {
  render() {
    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    )
  }
}

export default PdfView


//  pdf viewer doesnt instant render changes like normal react elements, so save pdf for the final save
    //  instead, have a regular react component that updates instantly and matches the pdf content. should not be too bad