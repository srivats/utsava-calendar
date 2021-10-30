
import Toolbar from "react-big-calendar/lib/Toolbar";
import "milligram";
class CustomToolbar extends Toolbar
{
    render() {
        return(
            <div>
                <div className="rbc-btn-group">
                <button type="button" onClick={() => this.navigate('PREV')}>Back</button>
                    <button type="button" onClick={() => this.navigate('TODAY')}>Today</button>					
					<button type="button" onClick={() => this.navigate('NEXT')}>Next</button>
				</div>
				<div className="rbc-toolbar-label">{this.props.label}</div>
				<div className="rbc-btn-group">
					<button type="button" onClick={this.view.bind(null, 'month')}>Month</button>
					<button type="button" onClick={this.view.bind(null, 'week')}>Week</button>
					<button type="button" onClick={this.view.bind(null, 'day')}>Day</button>
					<button type="button" onClick={this.view.bind(null, 'agenda')}>Agenda</button>
				</div>
            </div>
        );
    }
}
export default CustomToolbar;