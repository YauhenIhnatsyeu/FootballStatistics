import React from "react";

import Tabs from "./tabs";
import Tab from "./tab";

import Table from "./table";

export default class TabPanel extends React.Component {
    render() {
        return (
            <Tabs>
                <Tab title="English Premier League">
                    {/* <span>
                        Sagittis orci a scelerisque purus. Auctor eu augue ut lectus arcu bibendum at varius. Porta lorem mollis aliquam ut porttitor. Nullam ac tortor vitae purus faucibus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Pulvinar elementum integer enim neque volutpat ac tincidunt. Diam donec adipiscing tristique risus nec.
                    </span> */}
                    <Table
                        content={
                            [
                                ["Position", "Team", "G", "W", "D", "L", "GS", "GC", "P"],
                                ["1", "Chelsea FC", "38", "30", "3", "5", "85", "33", "93"],
                                ["2", "Tottenham Hotspur FC", "38", "26", "8", "4", "86", "26", "86"],
                                ["3", "Manchester City FC", "38", "23", "9", "6", "80", "39", "78"],
                                ["4", "Liverpool FC", "38", "22", "10", "6", "78", "42", "76"],
                                ["5", "Arsenal FC", "38", "23", "6", "9", "77", "44", "75"],
                                ["6", "Manchester United FC", "38", "18", "15", "5", "54", "29", "69"],
                                ["7", "Everton FC", "38", "17", "10", "11", "62", "44", "61"],
                                ["8", "Southampton FC", "38", "12", "10", "16", "41", "48", "46"],
                                ["9", "AFC Bournemouth", "38", "12", "10", "16", "55", "67", "46"],
                                ["10", "West Bromwich Albion FC", "38", "12", "9", "17", "43", "51", "45"],
                                ["11", "West Ham United FC", "38", "12", "9", "17", "47", "64", "45"],
                                ["12", "Leicester City FC", "38", "12", "8", "18", "48", "63", "44"],
                                ["13", "Stoke City FC", "38", "11", "11", "16", "41", "56", "44"],
                                ["14", "Crystal Palace FC", "38", "12", "5", "21", "50", "63", "41"],
                                ["15", "Swansea City FC", "38", "12", "5", "21", "45", "70", "41"],
                                ["16", "Burnley FC", "38", "11", "7", "20", "39", "55", "40"],
                                ["17", "Watford FC", "38", "11", "7", "20", "40", "68", "40"],
                                ["18", "Hull City FC", "38", "9", "7", "22", "37", "80", "34"],
                                ["19", "Middlesbrough FC", "38", "5", "13", "20", "27", "53", "28"],
                                ["20", "Sunderland AFC", "38", "6", "6", "26", "29", "69", "24"]
                            ]
                        }
                    />
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