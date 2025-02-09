import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MyButtonProps {
    title: string;
    onPress: () => void;
}


const Button: React.FC<MyButtonProps> = ({title ,onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5500a1',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        width: 200,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight:'bold',
    },
});

export default Button;

