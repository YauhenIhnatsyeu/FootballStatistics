import React from "react";

import Tabs from "./tabs";
import Tab from "./tab";

export default class TabPanel extends React.Component {
    render() {
        return (
            <Tabs>
                <Tab title="English Premier League">
                    <span>
                        Sagittis orci a scelerisque purus. Auctor eu augue ut lectus arcu bibendum at varius. Porta lorem mollis aliquam ut porttitor. Nullam ac tortor vitae purus faucibus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Pulvinar elementum integer enim neque volutpat ac tincidunt. Diam donec adipiscing tristique risus nec.
                    </span>
                </Tab>
                <Tab title="German 1. Bundesliga">
                    <span>
                        Lectus magna fringilla urna porttitor rhoncus dolor. Morbi tristique senectus et netus et malesuada fames ac turpis. Feugiat in fermentum posuere urna nec. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Leo a diam sollicitudin tempor id eu nisl. Mattis ullamcorper velit sed ullamcorper morbi. Mauris vitae ultricies leo integer malesuada nunc. Eget mi proin sed libero enim sed faucibus.
                    </span>
                </Tab>
                <Tab title="Spanish Primera">
                    <span>
                        Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Ac turpis egestas sed tempus. Tortor vitae purus faucibus ornare. Volutpat diam ut venenatis tellus in metus. Tincidunt augue interdum velit euismod in. Lectus mauris ultrices eros in cursus. Porta non pulvinar neque laoreet suspendisse interdum. Aenean sed adipiscing diam donec adipiscing tristique risus.
                    </span>
                </Tab>
                <Tab title="Italian Serie A">
                    <span>
                        Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Enim lobortis scelerisque fermentum dui faucibus. Nisl rhoncus mattis rhoncus urna neque. Id aliquet lectus proin nibh nisl. Eget mi proin sed libero enim sed faucibus turpis in. Gravida cum sociis natoque penatibus et magnis dis. Elit ut aliquam purus sit amet luctus venenatis lectus. Lacus vel facilisis volutpat est.
                    </span>
                </Tab>
                <Tab title="French League 1">
                    <span>
                        Integer malesuada nunc vel risus commodo. Pretium aenean pharetra magna ac. Quis auctor elit sed vulputate mi. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Eget arcu dictum varius duis at consectetur. Ac feugiat sed lectus vestibulum mattis ullamcorper. Magna fringilla urna porttitor rhoncus dolor. Ac tortor vitae purus faucibus ornare suspendisse sed. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Sagittis vitae et leo duis.
                    </span>
                </Tab>
            </Tabs>
        );
    }
}