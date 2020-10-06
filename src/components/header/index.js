import React from 'react';

import { Wrapper, ContentWrapper, LogoWrapper, TabWrapper, TabContent, GetInTouchWrapper } from './header.styled';

const Header = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <LogoWrapper>
                    LOGO
                </LogoWrapper>
                <TabWrapper>
                    <TabContent>
                        <div>
                            Home
                        </div>
                        <div>
                            My Portfolio
                        </div>
                        <div>
                            Clients
                        </div>
                        <GetInTouchWrapper>
                            Get In Touch
                        </GetInTouchWrapper>
                    </TabContent>
                </TabWrapper>
            </ContentWrapper>
        </Wrapper>
    );
};

export default Header;