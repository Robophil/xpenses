"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Action types and creators
var CyclesActions = CyclesActions_1 = (function () {
    function CyclesActions() {
    }
    CyclesActions.prototype.select = function (date) {
        return { type: CyclesActions_1.SELECT, payload: { date: date } };
    };
    CyclesActions.prototype.create = function (_a) {
        var budget = _a.budget;
        return { type: CyclesActions_1.CREATE, payload: { budget: budget } };
    };
    CyclesActions.prototype.create_complete = function (cycle) {
        return { type: CyclesActions_1.CREATE_COMPLETE, payload: cycle };
    };
    CyclesActions.prototype.add_category = function (_a) {
        var id = _a.id, amount = _a.amount, category = _a.category;
        return { type: CyclesActions_1.ADD_CATEGORY, payload: { id: id, amount: amount, category: category } };
    };
    CyclesActions.prototype.add_category_complete = function (id, category) {
        return { type: CyclesActions_1.ADD_CATEGORY_COMPLETE, payload: { id: id, category: category } };
    };
    CyclesActions.prototype.init = function () {
        return { type: CyclesActions_1.INIT };
    };
    CyclesActions.prototype.init_complete = function (payload) {
        return { type: CyclesActions_1.INIT_COMPLETE, payload: payload };
    };
    CyclesActions.prototype.fetch = function () {
        return { type: CyclesActions_1.FETCH };
    };
    CyclesActions.prototype.fetch_complete = function (payload) {
        return { type: CyclesActions_1.FETCH_COMPLETE, payload: payload };
    };
    return CyclesActions;
}());
CyclesActions.SELECT = '[CYCLES] SELECT';
CyclesActions.CREATE = '[CYCLES] CREATE';
CyclesActions.CREATE_COMPLETE = '[CYCLES] CREATE COMPLETE';
CyclesActions.ADD_CATEGORY = '[CYCLES] ADD CATEGORY';
CyclesActions.ADD_CATEGORY_COMPLETE = '[CYCLES] ADD CATEGORY COMPLETE';
CyclesActions.INIT = '[CYCLES] INIT';
CyclesActions.INIT_COMPLETE = '[CYCLES] INIT_COMPLETE';
CyclesActions.FETCH = '[CYCLES] FETCH';
CyclesActions.FETCH_COMPLETE = '[CYCLES] FETCH_COMPLETE';
CyclesActions = CyclesActions_1 = __decorate([
    core_1.Injectable()
], CyclesActions);
exports.CyclesActions = CyclesActions;
var CyclesActions_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGVzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN5Y2xlcy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MsNEJBQTRCO0FBRTVCLElBQWEsYUFBYTtJQUExQjtJQTZDQSxDQUFDO0lBM0NDLDhCQUFNLEdBQU4sVUFBTyxJQUFVO1FBQ2YsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsRUFBQyxDQUFDO0lBQzFELENBQUM7SUFHRCw4QkFBTSxHQUFOLFVBQU8sRUFBVTtZQUFSLGtCQUFNO1FBQ2IsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFHRCx1Q0FBZSxHQUFmLFVBQWdCLEtBQUs7UUFDbkIsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWEsQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFHRCxvQ0FBWSxHQUFaLFVBQWEsRUFBd0I7WUFBdEIsVUFBRSxFQUFFLGtCQUFNLEVBQUUsc0JBQVE7UUFDakMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWEsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsRUFBRSxDQUFDO0lBQ2pGLENBQUM7SUFHRCw2Q0FBcUIsR0FBckIsVUFBc0IsRUFBRSxFQUFFLFFBQVE7UUFDaEMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWEsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxFQUFFLENBQUM7SUFDbEYsQ0FBQztJQUdELDRCQUFJLEdBQUo7UUFDRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBYSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3JDLENBQUM7SUFHRCxxQ0FBYSxHQUFiLFVBQWMsT0FBTztRQUNuQixNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBYSxDQUFDLGFBQWEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFBO0lBQ3ZELENBQUM7SUFHRCw2QkFBSyxHQUFMO1FBQ0UsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN0QyxDQUFDO0lBR0Qsc0NBQWMsR0FBZCxVQUFlLE9BQU87UUFDcEIsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWEsQ0FBQyxjQUFjLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQTtJQUN4RCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDO0FBNUNRLG9CQUFNLEdBQUcsaUJBQWlCLENBQUM7QUFLM0Isb0JBQU0sR0FBRyxpQkFBaUIsQ0FBQztBQUszQiw2QkFBZSxHQUFHLDBCQUEwQixDQUFDO0FBSzdDLDBCQUFZLEdBQUcsdUJBQXVCLENBQUM7QUFLdkMsbUNBQXFCLEdBQUcsZ0NBQWdDLENBQUM7QUFLekQsa0JBQUksR0FBRyxlQUFlLENBQUM7QUFLdkIsMkJBQWEsR0FBRyx3QkFBd0IsQ0FBQztBQUt6QyxtQkFBSyxHQUFHLGdCQUFnQixDQUFDO0FBS3pCLDRCQUFjLEdBQUcseUJBQXlCLENBQUM7QUF6Q3ZDLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtHQUNBLGFBQWEsQ0E2Q3pCO0FBN0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG4vLyBBY3Rpb24gdHlwZXMgYW5kIGNyZWF0b3JzXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3ljbGVzQWN0aW9ucyB7XG4gIHN0YXRpYyBTRUxFQ1QgPSAnW0NZQ0xFU10gU0VMRUNUJztcbiAgc2VsZWN0KGRhdGU6IERhdGUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEN5Y2xlc0FjdGlvbnMuU0VMRUNULCBwYXlsb2FkOiB7IGRhdGUgfX07XG4gIH1cblxuICBzdGF0aWMgQ1JFQVRFID0gJ1tDWUNMRVNdIENSRUFURSc7XG4gIGNyZWF0ZSh7IGJ1ZGdldCB9KTogQWN0aW9uIHtcbiAgICByZXR1cm4geyB0eXBlOiBDeWNsZXNBY3Rpb25zLkNSRUFURSwgcGF5bG9hZDogeyBidWRnZXQgfSB9O1xuICB9XG5cbiAgc3RhdGljIENSRUFURV9DT01QTEVURSA9ICdbQ1lDTEVTXSBDUkVBVEUgQ09NUExFVEUnO1xuICBjcmVhdGVfY29tcGxldGUoY3ljbGUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEN5Y2xlc0FjdGlvbnMuQ1JFQVRFX0NPTVBMRVRFLCBwYXlsb2FkOiBjeWNsZSB9O1xuICB9XG5cbiAgc3RhdGljIEFERF9DQVRFR09SWSA9ICdbQ1lDTEVTXSBBREQgQ0FURUdPUlknO1xuICBhZGRfY2F0ZWdvcnkoeyBpZCwgYW1vdW50LCBjYXRlZ29yeSB9KTogQWN0aW9uIHtcbiAgICByZXR1cm4geyB0eXBlOiBDeWNsZXNBY3Rpb25zLkFERF9DQVRFR09SWSwgcGF5bG9hZDogeyBpZCwgYW1vdW50LCBjYXRlZ29yeSB9IH07XG4gIH1cblxuICBzdGF0aWMgQUREX0NBVEVHT1JZX0NPTVBMRVRFID0gJ1tDWUNMRVNdIEFERCBDQVRFR09SWSBDT01QTEVURSc7XG4gIGFkZF9jYXRlZ29yeV9jb21wbGV0ZShpZCwgY2F0ZWdvcnkpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEN5Y2xlc0FjdGlvbnMuQUREX0NBVEVHT1JZX0NPTVBMRVRFLCBwYXlsb2FkOiB7IGlkLCBjYXRlZ29yeSB9IH07XG4gIH1cblxuICBzdGF0aWMgSU5JVCA9ICdbQ1lDTEVTXSBJTklUJztcbiAgaW5pdCgpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEN5Y2xlc0FjdGlvbnMuSU5JVCB9XG4gIH1cblxuICBzdGF0aWMgSU5JVF9DT01QTEVURSA9ICdbQ1lDTEVTXSBJTklUX0NPTVBMRVRFJztcbiAgaW5pdF9jb21wbGV0ZShwYXlsb2FkKTogQWN0aW9uIHtcbiAgICByZXR1cm4geyB0eXBlOiBDeWNsZXNBY3Rpb25zLklOSVRfQ09NUExFVEUsIHBheWxvYWQgfVxuICB9XG5cbiAgc3RhdGljIEZFVENIID0gJ1tDWUNMRVNdIEZFVENIJztcbiAgZmV0Y2goKTogQWN0aW9uIHtcbiAgICByZXR1cm4geyB0eXBlOiBDeWNsZXNBY3Rpb25zLkZFVENIIH1cbiAgfVxuXG4gIHN0YXRpYyBGRVRDSF9DT01QTEVURSA9ICdbQ1lDTEVTXSBGRVRDSF9DT01QTEVURSc7XG4gIGZldGNoX2NvbXBsZXRlKHBheWxvYWQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEN5Y2xlc0FjdGlvbnMuRkVUQ0hfQ09NUExFVEUsIHBheWxvYWQgfVxuICB9XG59XG4iXX0=