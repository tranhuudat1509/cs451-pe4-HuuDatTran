import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [
                { id: 1, name: "John Doe", job: "React Native Developer" },
                { id: 2, name: "Jane Smith", job: "UI/UX Designer" },
                { id: 3, name: "Alice Brown", job: "Software Engineer" },
                { id: 4, name: "Bob Johnson", job: "Mobile Developer" },
                { id: 5, name: "Charlie Davis", job: "Project Manager" },
                { id: 6, name: "Emma Wilson", job: "QA Engineer" },
            ]
        };
    }

    renderProfileCard = (profile) => {
        return (
            <View key={profile.id} style={styles.cardContainer}>
                {/* Profile Image */}
                <View style={styles.cardImageContainer}>
                    <Image style={styles.cardImage}
                        source={require('/workspaces/cs451-pe4-HuuDatTran/Styling/assets/images/user.png')} />
                </View>

                {/* Name and Job Title */}
                <View style={styles.textContainer}>
                    <Text style={styles.cardName}>{profile.name}</Text>
                    <Text style={styles.cardJobTitle}>{profile.job}</Text>

                    {/* Horizontal Divider */}
                    <View style={styles.cardDivider} />

                    {/* Brief Job Description */}
                    <Text style={styles.cardDescription}>
                        Passionate in tech, focused on delivering high-quality solutions
                        with attention to detail and performance optimization.
                    </Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.gridContainer}>
                    {this.state.profiles.map(this.renderProfileCard)}
                </View>
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10, 
        paddingHorizontal: 10
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: 450, 
        paddingVertical: 10, 
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2, 
        borderStyle: 'solid',
        borderRadius: 14, 
        backgroundColor: profileCardColor,
        width: '46%', 
        flexBasis: '46%',
        marginBottom: 10, 
        aspectRatio: 1, 
        padding: 6, 
        position: 'relative',
        overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: 4 },
                shadowOpacity: 0.3
            },
            android: {
                elevation: 6
            }
        })
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 2, 
        borderColor: 'black',
        width: 72, 
        height: 72,
        borderRadius: 36, 
        paddingTop: 10, 
        position: 'absolute',
        top: 6, 
        zIndex: 1,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: 4 },
                shadowOpacity: 0.6
            },
            android: {
                elevation: 8
            }
        })
    },
    cardImage: {
        width: 58, 
        height: 58 
    },
    textContainer: {
        marginTop: 85, 
        alignItems: 'center'
    },
    cardName: {
        fontSize: 12, 
        fontWeight: 'bold',
        color: 'white',
        marginTop: 6, 
    },
    cardJobTitle: {
        fontSize: 10, 
        color: 'black',
        marginTop: 1.2, 
    },
    cardDivider: {
        width: '80%',
        height: 1.2, 
        backgroundColor: 'black',
        marginVertical: 6, 
    },
    cardDescription: {
        fontSize: 8.8, 
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 6, 
    }
});
