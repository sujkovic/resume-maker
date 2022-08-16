import React, { Component } from 'react'
import RobotoRegular from '../fonts/Roboto-Regular.ttf';
import RobotoBold from '../fonts/Roboto-Bold.ttf';
import RobotoItalic from '../fonts/Roboto-Italic.ttf';
import { Page, Text, Link, Font, View, Document, StyleSheet } from '@react-pdf/renderer';

Font.register({
    family: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fonts: [
        { src: RobotoRegular },
        { src: RobotoBold, fontWeight: 'bold' },
        {src: RobotoItalic, fontStyle: 'italic'},
    ],
});
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
    generalInfo: {
        flexDirection: 'row',
    },
    sectionTwo: {
        paddingTop: 12,
        paddingBottom: 12,
    },
    education: {
        flexDirection: 'column',
    },
    educationTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '6 6 3 6',
    },
    educationBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontStyle: 'italic',
        padding: '3 6 6 6',
    },
    sectionThree: {
        paddingTop: 12,
        paddingBottom: 12,
    },
    experience: {
        flexDirection: 'column',
    },
    experienceTopOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '6 6 3 6',
    },
    experienceTopTwo: {
        fontStyle: 'italic',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '3 6 3 6',
    },
    experienceBottom: {
        flexDirection: 'column',
        paddingLeft: 24,
    },
    sectionFour: {
        paddingTop: 12,
        paddingBottom: 12,
    },
    technical: {
        flexDirection: 'column',
        padding: 6,
    },
    technicalCategory: {
        flexDirection: 'row',
    },
    sectionFive: {
        paddingTop: 12,
        paddingBottom: 12,
    },
    projects: {
        flexDirection: 'column',
        padding: 6,
    },
    projectsTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 3,
    },
    projectsBottom: {
        flexDirection: 'column',
        paddingLeft: 16,
    }

    //  note you most likely cant do italic bc the default
    //  font doesnt support it.
    //  go download a font wit italic and bold.
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
                        <Text style={{ borderRight: '1px black solid', paddingLeft: 8, paddingRight: 8 }}>
                            <Link style={{color: 'black'}} src={form.website}>{form.website}</Link>
                        </Text>
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
                <View style={styles.sectionFour}>
                    <Text style={{ borderBottom: '1px black solid', fontSize: 14 }}>Technical Skills</Text>
                    <View style={styles.technical}>
                        <View style={styles.technicalCategory}>
                            <Text style={{ fontWeight: 'bold', paddingRight: 4 }}>{form.technicalOne}:</Text>
                            <Text style={{paddingBottom: 3}}>{form.technicalOneText}</Text>
                        </View>
                        <View style={styles.technicalCategory}>
                            <Text style={{ fontWeight: 'bold', paddingRight: 4 }}>{form.technicalTwo}:</Text>
                            <Text style={{paddingBottom: 3}}>{form.technicalTwoText}</Text>
                        </View>
                        <View style={styles.technicalCategory}>
                            <Text style={{ fontWeight: 'bold', paddingRight: 4 }}>{form.technicalThree}:</Text>
                            <Text style={{}}>{form.technicalThreeText}</Text>
                        </View>
                    </View>
                </View>
                {/*           EXPERIENCE          */}
                <View style={styles.sectionThree}>
                    <Text style={{ borderBottom: '1px black solid', fontSize: 14 }}>Experience</Text>
                    <View style={styles.experience}>
                        <View style={styles.experienceTopOne}>
                            <Text style={{ fontWeight: 'bold' }}>{form.position}</Text>
                            <Text>{form.yearsWorked}</Text>
                        </View>
                        <View style={styles.experienceTopTwo}>
                            <Text>{form.company}</Text>
                            <Text>{form.companyLocation}</Text>
                        </View>
                        <View style={styles.experienceBottom}>
                            <Text style={{paddingBottom: 2}}>• {form.bulletOne}</Text>
                            <Text style={{paddingBottom: 2}}>• {form.bulletTwo}</Text>
                            <Text>• {form.bulletThree}</Text>
                        </View>
                    </View>
                    <View style={styles.experience}>
                        <View style={styles.experienceTopOne}>
                            <Text style={{ fontWeight: 'bold' }}>{form.position2}</Text>
                            <Text>{form.yearsWorked2}</Text>
                        </View>
                        <View style={styles.experienceTopTwo}>
                            <Text>{form.company2}</Text>
                            <Text>{form.companyLocation2}</Text>
                        </View>
                        <View style={styles.experienceBottom}>
                            <Text style={{paddingBottom: 2}}>• {form.bulletOne2}</Text>
                            <Text style={{paddingBottom: 2}}>• {form.bulletTwo2}</Text>
                            <Text>• {form.bulletThree2}</Text>
                        </View>
                    </View>
                    <View style={styles.experience}>
                        <View style={styles.experienceTopOne}>
                            <Text style={{ fontWeight: 'bold' }}>{form.position3}</Text>
                            <Text>{form.yearsWorked3}</Text>
                        </View>
                        <View style={styles.experienceTopTwo}>
                            <Text>{form.company3}</Text>
                            <Text>{form.companyLocation3}</Text>
                        </View>
                        <View style={styles.experienceBottom}>
                            <Text style={{paddingBottom: 2}}>• {form.bulletOne3}</Text>
                            <Text style={{paddingBottom: 2}}>• {form.bulletTwo3}</Text>
                            <Text>• {form.bulletThree3}</Text>
                        </View>
                    </View>
                </View>
                
                {/*      PROJECTS      */}
                <View style={styles.sectionFive}>
                    <Text style={{ borderBottom: '1px black solid', fontSize: 14 }}>Projects</Text>
                    <View style={styles.projects}>
                        <View style={styles.projectsTop}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{ fontWeight: 'bold', borderRight: '1px solid black', paddingRight: 6 }}>{form.projectName}</Text>
                                <Text style={{ fontWeight: 'italic', paddingLeft: 6 }}>{form.projectLanguages}</Text>
                            </View>
                            <Text>{form.projectDate}</Text>
                        </View>
                        <View style={styles.projectsBottom}>
                            <Text style={{}}>• {form.projectBulletOne}</Text>
                            <Text style={{}}>• {form.projectBulletTwo}</Text>
                            <Text style={{}}>• {form.projectBulletThree}</Text>
                        </View>
                    </View>
                    <View style={styles.projects}>
                        <View style={styles.projectsTop}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{ fontWeight: 'bold', borderRight: '1px solid black', paddingRight: 6 }}>{form.projectName2}</Text>
                                <Text style={{ fontWeight: 'italic', paddingLeft: 6 }}>{form.projectLanguages2}</Text>
                            </View>
                            <Text>{form.projectDate2}</Text>
                        </View>
                        <View style={styles.projectsBottom}>
                            <Text style={{}}>• {form.projectBulletOne2}</Text>
                            <Text style={{}}>• {form.projectBulletTwo2}</Text>
                            <Text style={{}}>• {form.projectBulletThree2}</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
  }
}

export default PdfView