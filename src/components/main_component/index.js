import React, { useState } from 'react';

import List from '../list_component';
import SelectedList from '../select_list_component';
import { Wrapper, ContentWrapper } from './main.styled';

const Main = () => {

    const [list, setList] = useState({
        Portugal: {
            data: ['Aisya Jayavant', 'Cari Bella', 'Tim Cook',  'Kent C Odds']
        },
        Nicaragua: {
            data: ['Steve Jobs', 'Nikola Tesla', 'Major Sim',  'Bella Watson']
        }
    });

    const [selectedList, setSelectedList] = useState({});

    return (
        <Wrapper>
            <ContentWrapper>
                <List 
                    list={list}
                    selectedList={selectedList}
                    setSelectedList={setSelectedList}
                />
                <SelectedList 
                    selectedList={selectedList}
                    setSelectedList={setSelectedList}
                />
            </ContentWrapper>
        </Wrapper>
    )
};

export default Main;