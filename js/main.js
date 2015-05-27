var roundsURL = 'http://localhost:3000/api/rounds';
var usersURL = 'http://localhost:3000/api/users';

var CurrentRound;

var PlayersBox;

var RoundBox =  React.createClass({
    loadRoundsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'GET',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadRoundsFromServer();
        setInterval(this.loadRoundsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div className="roundBox">
                {this.state.data}
            </div>
        );
    }
});

React.render(
    <RoundBox url="http://localhost:3000/api/rounds" pollInterval={2000} />,
    document.getElementById('main')
);