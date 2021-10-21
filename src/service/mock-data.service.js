import {Feature} from '../model/feature'

export class MockDataService {
    getSomeFeatureData(keyword) {
        const mockData = [
            new Feature('10', '測試10'),
            new Feature('12', '測試12'),
            new Feature('13', '測試13'),
            new Feature('14', '測試14'),
            new Feature('15', '測試15'),
            new Feature('26', '測試26'),
            new Feature('27', '測試27'),
            new Feature('28', '測試28'),
        ]
        return Promise.resolve({
            data: mockData.filter(data => data.description.includes(keyword))
        })
    }
}