import React from "react";

import Tabs from "./tabs";
import Tab from "./tab";

export default class TabPanel extends React.Component {
    render() {
        return (
            <Tabs>
                <Tab title="English Premier League" isCurrent={true}>
                    <span>
                        Sagittis orci a scelerisque purus. Auctor eu augue ut lectus arcu bibendum at varius. Porta lorem mollis aliquam ut porttitor. Nullam ac tortor vitae purus faucibus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Pulvinar elementum integer enim neque volutpat ac tincidunt. Diam donec adipiscing tristique risus nec.
                    </span>
                </Tab>
                <Tab title="German 1. Bundesliga" isCurrent={false}>
                    <span>
                        Sagittis orci a scelerisque purus. Auctor eu augue ut lectus arcu bibendum at varius. Porta lorem mollis aliquam ut porttitor. Nullam ac tortor vitae purus faucibus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Pulvinar elementum integer enim neque volutpat ac tincidunt. Diam donec adipiscing tristique risus nec.
                    </span>
                </Tab>
                <Tab title="Spanish Primera" isCurrent={false}>
                    <span>
                        Sagittis orci a scelerisque purus. Auctor eu augue ut lectus arcu bibendum at varius. Porta lorem mollis aliquam ut porttitor. Nullam ac tortor vitae purus faucibus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Pulvinar elementum integer enim neque volutpat ac tincidunt. Diam donec adipiscing tristique risus nec.
                    </span>
                </Tab>
                <Tab title="Italian Serie A" isCurrent={false}>
                    <span>
                        Sagittis orci a scelerisque purus. Auctor eu augue ut lectus arcu bibendum at varius. Porta lorem mollis aliquam ut porttitor. Nullam ac tortor vitae purus faucibus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Pulvinar elementum integer enim neque volutpat ac tincidunt. Diam donec adipiscing tristique risus nec.
                    </span>
                </Tab>
                <Tab title="French League 1" isCurrent={false}>
                    <span>
                        Sagittis orci a scelerisque purus. Auctor eu augue ut lectus arcu bibendum at varius. Porta lorem mollis aliquam ut porttitor. Nullam ac tortor vitae purus faucibus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Pulvinar elementum integer enim neque volutpat ac tincidunt. Diam donec adipiscing tristique risus nec.
                    </span>
                </Tab>
            </Tabs>
        );
    }
}