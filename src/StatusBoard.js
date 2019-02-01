import React, { Component } from "react";
import TavernBannerWip from './TavernBannerWip.png';
import MineBannerWip from "./MineBannerWip.png";
import WorkshopBanner from "./WorkshopBannerWip.png";
import WarRoomBanner from "./WarRoomBannerWip.png";
import MarketBanner from "./MarketBannerWip.png";
import ArenaBanner from "./ArenaBannerWip.png";

class StatusBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("http://192.168.1.131:3001/status")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        status: result,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            if(this.state.status==null)
            {
                return(
                    <div>
                        <img src={TavernBannerWip}/>
                        <p>No status updates on Tavern at this time</p>
                        <img src={MineBannerWip}/>
                        <p>No status updates on Mine at this time</p>
                        <img src={WorkshopBanner}/>
                        <p>No status updates on Workshop at this time</p>
                        <img src={WarRoomBanner}/>
                        <p>No status updates on War Room at this time</p>
                        <img src={MarketBanner}/>
                        <p>No status updates on Market at this time</p>
                        <img src={ArenaBanner}/>
                        <p>No status updates on Arena at this time</p>
                    </div>
                )
            }else
            {
                return (
                    <div>
                        <img src={TavernBannerWip}/>
                        <p>{this.state.status.tavern}</p>
                        <img src={MineBannerWip}/>
                        <p>{this.state.status.Mine}</p>
                        <img src={WorkshopBanner}/>
                        <p>{this.state.status.workshop}</p>
                        <img src={WarRoomBanner}/>
                        <p>{this.state.status.warroom}</p>
                        <img src={MarketBanner}/>
                        <p>{this.state.status.market}</p>
                        <img src={ArenaBanner}/>
                        <p>{this.state.status.arena}</p>
                    </div>
                );
            }
        }
    }
}

export default StatusBoard;