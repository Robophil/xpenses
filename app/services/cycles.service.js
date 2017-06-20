"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
exports.sign = '₦';
var round = function (num) { return +(Math.round(+(num + 'e+2')) + 'e-2'); };
var rand = function () { return (Math.random() * 10000); };
var rand2 = function () { return Math.floor(Math.random() * 10000); };
var CyclesService = (function () {
    function CyclesService() {
    }
    CyclesService.prototype.count = function () {
        return 0;
    };
    CyclesService.prototype.create = function (_a) {
        var budget = _a.budget;
        return Observable_1.Observable.of({
            id: rand2(),
            sign: exports.sign,
            categories: [],
            expense: this.format(0),
            budget: this.format(budget),
            created: new Date
        });
    };
    CyclesService.prototype.format = function (input) {
        var suffix = input > 1000000 ? 'M' : 'K';
        var count = round(+input);
        return { count: count, suffix: suffix };
    };
    CyclesService.prototype.fetch = function (params) {
        var _this = this;
        return Observable_1.Observable.of(5).map(function (i) {
            var data = [];
            var id = rand2();
            for (i; i > 0; i--) {
                var expense = _this.format(rand());
                var budget = _this.format(rand());
                var categories = [];
                for (var j = 10; j > 0; j--) {
                    var id_2 = rand().toFixed(0), name_1 = 'Category_' + id_2, value = rand().toFixed(2);
                    categories.push({ id: id_2, name: name_1, value: value, created: new Date() });
                }
                data.push({ id: id, sign: exports.sign, categories: categories, expense: expense, budget: budget, created: new Date });
            }
            return data;
        });
    };
    return CyclesService;
}());
CyclesService = __decorate([
    core_1.Injectable()
], CyclesService);
exports.CyclesService = CyclesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjeWNsZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw4Q0FBNkM7QUFDN0MsbUJBQWlCO0FBSUosUUFBQSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ3hCLElBQU0sS0FBSyxHQUFHLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFJLEtBQUssQ0FBQyxFQUF0QyxDQUFzQyxDQUFDO0FBQzlELElBQU0sSUFBSSxHQUFHLGNBQU0sT0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztBQUMzQyxJQUFNLEtBQUssR0FBRyxjQUFNLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQWpDLENBQWlDLENBQUM7QUFHdEQsSUFBYSxhQUFhO0lBQTFCO0lBNENBLENBQUM7SUExQ0MsNkJBQUssR0FBTDtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEVBQVU7WUFBUixrQkFBTTtRQUNiLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQztZQUNuQixFQUFFLEVBQUUsS0FBSyxFQUFFO1lBQ1gsSUFBSSxjQUFBO1lBQ0osVUFBVSxFQUFFLEVBQUU7WUFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzNCLE9BQU8sRUFBRSxJQUFJLElBQUk7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxLQUFLO1FBQ1YsSUFBTSxNQUFNLEdBQUcsS0FBSyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNDLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxNQUFNO1FBQVosaUJBb0JDO1FBbkJDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO1lBQzNCLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFNLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztZQUVuQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNuQixJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3BDLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbkMsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUV0QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUM1QixJQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBSSxHQUFHLFdBQVcsR0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkYsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQUVELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUEsRUFBRSxJQUFJLGNBQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzFFLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtHQUNBLGFBQWEsQ0E0Q3pCO0FBNUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9SeFwiO1xuXG5pbXBvcnQgeyBDeWNsZXNNb2RlbCB9IGZyb20gJy4uL21vZGVscy9jeWNsZS5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBzaWduID0gJ+KCpic7XG5jb25zdCByb3VuZCA9IChudW0pID0+ICsoTWF0aC5yb3VuZCgrKG51bSArICdlKzInKSkgICsgJ2UtMicpO1xuY29uc3QgcmFuZCA9ICgpID0+IChNYXRoLnJhbmRvbSgpICogMTAwMDApO1xuY29uc3QgcmFuZDIgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDeWNsZXNTZXJ2aWNlIHtcblxuICBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY3JlYXRlKHsgYnVkZ2V0IH0pOiBPYnNlcnZhYmxlPEN5Y2xlc01vZGVsPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUub2Yoe1xuICAgICAgaWQ6IHJhbmQyKCksXG4gICAgICBzaWduLFxuICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICBleHBlbnNlOiB0aGlzLmZvcm1hdCgwKSxcbiAgICAgIGJ1ZGdldDogdGhpcy5mb3JtYXQoYnVkZ2V0KSxcbiAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlXG4gICAgfSk7XG4gIH1cblxuICBmb3JtYXQoaW5wdXQpIHtcbiAgICBjb25zdCBzdWZmaXggPSBpbnB1dCA+IDEwMDAwMDAgPyAnTScgOiAnSyc7XG4gICAgY29uc3QgY291bnQgPSByb3VuZCgraW5wdXQpO1xuICAgIHJldHVybiB7IGNvdW50LCBzdWZmaXggfTtcbiAgfVxuXG4gIGZldGNoKHBhcmFtcyk6IE9ic2VydmFibGU8Q3ljbGVzTW9kZWxbXT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKDUpLm1hcChpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICAgIGNvbnN0IGlkID0gcmFuZDIoKTtcblxuICAgICAgZm9yIChpOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGV4cGVuc2UgPSB0aGlzLmZvcm1hdChyYW5kKCkpO1xuICAgICAgICBjb25zdCBidWRnZXQgPSB0aGlzLmZvcm1hdChyYW5kKCkpO1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDEwOyBqID4gMDsgai0tKSB7XG4gICAgICAgICAgY29uc3QgaWRfMiA9IHJhbmQoKS50b0ZpeGVkKDApLCBuYW1lID0gJ0NhdGVnb3J5XycraWRfMiwgdmFsdWUgPSByYW5kKCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goeyBpZDogaWRfMiwgbmFtZSwgdmFsdWUsIGNyZWF0ZWQ6IG5ldyBEYXRlKCkgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLnB1c2goeyBpZCwgc2lnbiwgY2F0ZWdvcmllcywgZXhwZW5zZSwgYnVkZ2V0LCBjcmVhdGVkOiBuZXcgRGF0ZSB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgfVxufVxuIl19