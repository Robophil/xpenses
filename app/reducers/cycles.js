"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var cycles_action_1 = require("../actions/cycles.action");
var initialState = {
    selected: '',
    count: 0,
    date: new Date,
    status: false,
    ids: [],
    data: null,
};
// Reducer
function cycles(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case cycles_action_1.CyclesActions.SELECT: { }
        case cycles_action_1.CyclesActions.ADD_CATEGORY_COMPLETE: {
            var cycle = state.data[payload.id];
            var previous = cycle.categories;
            var categories = [payload.category].concat(previous);
            return Object.assign({}, state, { data: Object.assign({}, state.data, { categories: categories }) });
        }
        case cycles_action_1.CyclesActions.CREATE_COMPLETE: {
            var data = Object.assign({}, state.data, (_b = {}, _b[payload.id] = payload, _b));
            var ids = [payload.id].concat(state.ids);
            return Object.assign({}, state, { date: payload.date, selected: payload.id, status: true, ids: ids, data: data });
        }
        case cycles_action_1.CyclesActions.INIT_COMPLETE: {
            var ids = payload.map(function (data) { return data.id; });
            var data = _.mapKeys(payload, 'id');
            return Object.assign({}, state, { status: false, count: ids.length, ids: ids, data: data });
        }
        default: return state;
    }
    var _b;
}
exports.cycles = cycles;
;
// Selectors
function getIds() {
    return function (diary$) { return diary$.map(function (t) { return t.ids; }).filter(function (ids) { return !!ids; }); };
}
exports.getIds = getIds;
function getData(ids) {
    return function (diary$) { return diary$
        .map(function (t) { return t.data; })
        .filter(function (data) { return data !== null; })
        .map(function (data) { return ids.map(function (id) { return data[id]; }); }); };
}
exports.getData = getData;
function getSelectedId() {
    return function (diary$) { return diary$.map(function (t) { return t.selected; }).filter(function (s) { return !!s.length; }); };
}
exports.getSelectedId = getSelectedId;
function getSelectedDate() {
    return function (diary$) { return diary$.map(function (t) { return t.date; }); };
}
exports.getSelectedDate = getSelectedDate;
function getSelected() {
    return function (diary$) { return diary$.filter(function (s) { return !!s.ids.length; }).map(function (t) { return t.data[t.selected]; }); };
}
exports.getSelected = getSelected;
function getCount() {
    return function (diary$) { return diary$.map(function (t) { return t.count; }); };
}
exports.getCount = getCount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3ljbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMEJBQTRCO0FBRzVCLDBEQUF5RDtBQVl6RCxJQUFNLFlBQVksR0FBZ0I7SUFDaEMsUUFBUSxFQUFFLEVBQUU7SUFDWixLQUFLLEVBQUUsQ0FBQztJQUNSLElBQUksRUFBRSxJQUFJLElBQUk7SUFDZCxNQUFNLEVBQUUsS0FBSztJQUNiLEdBQUcsRUFBRSxFQUFFO0lBQ1AsSUFBSSxFQUFFLElBQUk7Q0FDWCxDQUFBO0FBRUQsVUFBVTtBQUNWLGdCQUF1QixLQUFpQyxFQUFFLEVBQXlCO0lBQTVELHNCQUFBLEVBQUEsb0JBQWlDO1FBQUksY0FBSSxFQUFFLG9CQUFPO0lBQ3ZFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDYixLQUFLLDZCQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTlCLEtBQUssNkJBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ3pDLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDbEMsSUFBTSxVQUFVLElBQUksT0FBTyxDQUFDLFFBQVEsU0FBSyxRQUFRLENBQUMsQ0FBQztZQUVuRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNGLENBQUM7UUFFRCxLQUFLLDZCQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDbkMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FB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QSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQWQsQ0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQWxCLENBQWtCLENBQUMsRUFBL0QsQ0FBK0QsQ0FBQztBQUM5RyxDQUFDO0FBRkQsa0NBRUM7QUFDRDtJQUNFLE1BQU0sQ0FBQyxVQUFDLE1BQStCLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztBQUN2RSxDQUFDO0FBRkQsNEJBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEN5Y2xlc01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2N5Y2xlLm1vZGVsJztcbmltcG9ydCB7IEN5Y2xlc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2N5Y2xlcy5hY3Rpb24nO1xuXG5leHBvcnQgdHlwZSBDeWNsZXNEYXRhID0geyBbaWQ6IG51bWJlcl06IEN5Y2xlc01vZGVsIH07XG5leHBvcnQgaW50ZXJmYWNlIEN5Y2xlc1N0YXRlIHtcbiAgc2VsZWN0ZWQ6IHN0cmluZztcbiAgZGF0ZTogRGF0ZTtcbiAgc3RhdHVzOiBib29sZWFuO1xuICBpZHM6IG51bWJlcltdO1xuICBkYXRhOiBDeWNsZXNEYXRhO1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IEN5Y2xlc1N0YXRlID0ge1xuICBzZWxlY3RlZDogJycsXG4gIGNvdW50OiAwLFxuICBkYXRlOiBuZXcgRGF0ZSxcbiAgc3RhdHVzOiBmYWxzZSxcbiAgaWRzOiBbXSxcbiAgZGF0YTogbnVsbCxcbn1cblxuLy8gUmVkdWNlclxuZXhwb3J0IGZ1bmN0aW9uIGN5Y2xlcyhzdGF0ZTogQ3ljbGVzU3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9OiBBY3Rpb24pOiBDeWNsZXNTdGF0ZSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQ3ljbGVzQWN0aW9ucy5TRUxFQ1Q6IHsgfVxuXG4gICAgY2FzZSBDeWNsZXNBY3Rpb25zLkFERF9DQVRFR09SWV9DT01QTEVURToge1xuICAgICAgY29uc3QgY3ljbGUgPSBzdGF0ZS5kYXRhW3BheWxvYWQuaWRdO1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBjeWNsZS5jYXRlZ29yaWVzO1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFtwYXlsb2FkLmNhdGVnb3J5LCAuLi5wcmV2aW91c107XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5kYXRhLCB7IGNhdGVnb3JpZXMgfSkgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBDeWNsZXNBY3Rpb25zLkNSRUFURV9DT01QTEVURToge1xuICAgICAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmRhdGEsIHsgW3BheWxvYWQuaWRdOiBwYXlsb2FkIH0pO1xuICAgICAgY29uc3QgaWRzID0gW3BheWxvYWQuaWQsIC4uLnN0YXRlLmlkc107XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZGF0ZTogcGF5bG9hZC5kYXRlLCBzZWxlY3RlZDogcGF5bG9hZC5pZCwgc3RhdHVzOiB0cnVlLCBpZHMsIGRhdGEgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBDeWNsZXNBY3Rpb25zLklOSVRfQ09NUExFVEU6IHtcbiAgICAgIGNvbnN0IGlkcyA9IHBheWxvYWQubWFwKGRhdGEgPT4gZGF0YS5pZCk7XG4gICAgICBjb25zdCBkYXRhID0gXy5tYXBLZXlzKHBheWxvYWQsICdpZCcpIGFzIEN5Y2xlc0RhdGE7XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBzdGF0dXM6IGZhbHNlLCBjb3VudDogaWRzLmxlbmd0aCwgaWRzLCBkYXRhIH0pO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuXG4vLyBTZWxlY3RvcnNcbmV4cG9ydCBmdW5jdGlvbiBnZXRJZHMoKSB7XG4gIHJldHVybiAoZGlhcnkkOiBPYnNlcnZhYmxlPEN5Y2xlc1N0YXRlPikgPT4gZGlhcnkkLm1hcCh0ID0+IHQuaWRzKS5maWx0ZXIoaWRzID0+ICEhaWRzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKGlkcykge1xuICByZXR1cm4gKGRpYXJ5JDogT2JzZXJ2YWJsZTxDeWNsZXNTdGF0ZT4pID0+IGRpYXJ5JFxuICAgIC5tYXAodCA9PiB0LmRhdGEpXG4gICAgLmZpbHRlcihkYXRhID0+IGRhdGEgIT09IG51bGwpXG4gICAgLm1hcChkYXRhID0+IGlkcy5tYXAoaWQgPT4gZGF0YVtpZF0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZElkKCkge1xuICByZXR1cm4gKGRpYXJ5JDogT2JzZXJ2YWJsZTxDeWNsZXNTdGF0ZT4pID0+IGRpYXJ5JC5tYXAodCA9PiB0LnNlbGVjdGVkKS5maWx0ZXIocyA9PiAhIXMubGVuZ3RoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZERhdGUoKSB7XG4gIHJldHVybiAoZGlhcnkkOiBPYnNlcnZhYmxlPEN5Y2xlc1N0YXRlPikgPT4gZGlhcnkkLm1hcCh0ID0+IHQuZGF0ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWQoKSB7XG4gIHJldHVybiAoZGlhcnkkOiBPYnNlcnZhYmxlPEN5Y2xlc1N0YXRlPikgPT4gZGlhcnkkLmZpbHRlcihzID0+ICEhcy5pZHMubGVuZ3RoKS5tYXAodCA9PiB0LmRhdGFbdC5zZWxlY3RlZF0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvdW50KCkge1xuICByZXR1cm4gKGRpYXJ5JDogT2JzZXJ2YWJsZTxDeWNsZXNTdGF0ZT4pID0+IGRpYXJ5JC5tYXAodCA9PiB0LmNvdW50KTtcbn1cbiJdfQ==