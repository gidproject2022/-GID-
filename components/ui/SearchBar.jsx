import { View, Text, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { Searchbar } from 'react-native-paper';

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View>
        <Searchbar
            style={{
                marginTop: 28,
                height: 45,
                width: (WIDTH - 58),
                marginLeft: 2,
                backgroundColor: '#F2F2F2'
            }}
            placeholder="Поиск"
            onChangeText={onChangeSearch}
            value={searchQuery}
            />
        </View>
    )
}

export default SearchBar