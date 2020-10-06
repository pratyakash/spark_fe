import React from 'react';

import { OptionWrapper, OptionContent, CrossWrapper } from './select.list.styled';
import { ItemWrapper } from '../list_component/list.styled';
import { ListWrapper, HeadingWrapper } from '../common.styled';

const SelectedList = props => {

    const { selectedList, setSelectedList } = props;

    const removeItem = (key, value) => {
        const tempSelectedList = Object.assign({}, selectedList);
        
        const tempData = tempSelectedList[key]['data'];
        const index = tempData.indexOf(value);

        tempData.splice(index, 1);

        if (tempData.length === 0) {
            delete tempSelectedList[key];
        }
        else {
            tempSelectedList[key]['data'] = [...tempData];
        }

        setSelectedList(tempSelectedList);
    };

    return (
        <ListWrapper
            style={{
                alignItems: Object.keys(selectedList).length === 0 && 'center',
                justifyContent: Object.keys(selectedList).length === 0 && 'center'
            }}
        >   
            {
                selectedList && Object.keys(selectedList).length > 0 ? Object.keys(selectedList).map(key => {
                    const data = selectedList[key]['data'];

                    return (
                        <ItemWrapper
                            key={key}
                        >
                            <HeadingWrapper>
                                {key}
                            </HeadingWrapper>
                            <OptionWrapper>
                                {
                                    data && data.length > 0 && data.map(d => {
                                        return (
                                            <OptionContent
                                                key={d}
                                            >
                                                {d}
                                                <CrossWrapper
                                                    onClick={() => removeItem(key, d)}
                                                >
                                                    ✕
                                                </CrossWrapper>
                                            </OptionContent>
                                        )
                                    })
                                }
                            </OptionWrapper>
                        </ItemWrapper>
                    )
                })
                :
                <div>
                    No Values Selected
                </div>
            }
        </ListWrapper>
    )
};

export default SelectedList;