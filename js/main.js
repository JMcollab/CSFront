var CurrentRound;

var PlayersBox;

var RoundBox =  React.createClass({
    render: function() {
        return (
            <div className="roundBox">
                <h1>Round ID</h1>
            </div>
        );
    }
});

React.render(
    <RoundBox />,
    document.getElementById('main')
);