import React from 'react';

import { OptionWrapper, ItemWrapper } from './list.styled';
import { ListWrapper, HeadingWrapper } from '../common.styled';

const List = props => {

    const { list, selectedList, setSelectedList } = props;

    const onChangeInput = (key, value) => {
        const tempSelectedList = Object.assign({}, selectedList);

        if (typeof tempSelectedList[key] === 'undefined' ) {
            tempSelectedList[key] = {};
            tempSelectedList[key]['data'] = [];
            tempSelectedList[key]['data'].push(value);
        }
        else {
            const tempData = [...tempSelectedList[key]['data']];
            const index = tempData.indexOf(value);


            if (index === -1) {
                tempData.push(value);
            }
            else {
                tempData.splice(index, 1);
            }
            tempSelectedList[key]['data'] = [...tempData]
        }

        setSelectedList(tempSelectedList);
    };

    return (
        <ListWrapper>
            {
                list && Object.keys(list).length > 0 && Object.keys(list).map(key => {
                    const data = list[key]['data'];

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
                                            <div
                                                key={d}
                                            >
                                                <input 
                                                    type='checkbox' 
                                                    onChange={() => onChangeInput(key, d)} 
                                                    checked={(selectedList[key] && selectedList[key]['data'] && (selectedList[key]['data'].indexOf(d) > -1))} 
                                                />
                                                {d}
                                            </div>
                                        )
                                    })
                                }
                            </OptionWrapper>
                        </ItemWrapper>
                    )
                })
            }
        </ListWrapper>
    )
};

export default List;