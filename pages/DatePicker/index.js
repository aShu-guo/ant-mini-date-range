Page({
  data: {
    min: new Date('2019/01/15'),
    max: new Date('2023/08/20'),
    defaultDate: new Date('2019/02/02'),
    defaultDateRange: [new Date('2022/03/21'), new Date('2022/05/20')],
  },
  handlePickerChange(date, dateStr, e) {
    console.log('onPickerChange', date, dateStr, e);
  },
  handleOk(date, format, e) {
    console.log('onOk', date, format, e);
  },
  handlePickerRangeChange(type, date, dateStr, e) {
    console.log('onPickerRangeChange', type, date, dateStr, e);
  },
  handleRangeOk(date, format, e) {
    console.log('onRangeOk', date, format, e);
  },
  handleChangeDate() {
    this.setData({ defaultDate: new Date('2019/05/02') });
  },
  handleTriggerPicker(visible, e) {
    console.log('onVisibleChange', visible, e);
  },

  handleDismiss(e) {
    console.log('e', e);
  },
  handleFormatLabel(type, value) {
    return String(value);
  },
});
