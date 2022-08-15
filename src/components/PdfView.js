import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
        fontSize: 11,
        flexDirection: 'column',
        //backgroundColor: '#E4E4E4',
        padding: '.5in',
    },
    sectionOne: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    education: {
        flexDirection: 'column',
    },
    educationTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '6 6 4 6',
    },
    educationBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontStyle: 'italic',
        padding: '4 6 6 6',
    },
    generalInfo: {
        flexDirection: 'row',
    },
    sectionTwo: {
        paddingTop: 12,
        paddingBottom: 12,
    },
    sectionThree: {
        paddingTop: 12,
        paddingBottom: 12,
    },
    sectionFour: {
        paddingTop: 12,
        paddingBottom: 12,
    }
});

class PdfView extends Component {
  render() {
      const { form } = this.props;
    return (
        <Document>
            <Page size='LETTER' style={styles.page}>
                <View style={styles.sectionOne}>
                    <Text style={{fontSize: 26}}>{form.name}</Text>
                    <View style={styles.generalInfo}>
                        <Text style={{borderRight: '1px black solid', paddingRight: 8}}>{form.phone}</Text>
                        <Text style={{borderRight: '1px black solid', paddingLeft: 8, paddingRight: 8}}>{form.website}</Text>
                        <Text style={{paddingLeft: 8}}>{form.email}</Text>
                    </View>
                </View>
                <View style={styles.sectionTwo}>
                    <Text style={{ borderBottom: '1px black solid', fontSize: 14 }}>Education</Text>
                    <View style={styles.education}>
                        <View style={styles.educationTop}>
                            <Text style={{fontWeight: 'bold'}}>{form.school}</Text> 
                            <Text>{form.schoolLocation}</Text>
                        </View>
                        <View style={styles.educationBottom}>
                            <Text>{form.degree}</Text>
                            <Text>{form.yearsAttended}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.sectionThree}>
                    <Text style={{ borderBottom: '1px black solid', fontSize: 14 }}>Experience</Text>
                </View>
                <View style={styles.sectionFour}>
                    <Text style={{ borderBottom: '1px black solid', fontSize: 14 }}>Projects</Text>
                </View>
            </Page>
        </Document>
    )
  }
}

export default PdfView


//  pdf viewer doesnt instant render changes like normal react elements, so save pdf for the final save
    //  instead, have a regular react component that updates instantly and matches the pdf content. should not be too bad