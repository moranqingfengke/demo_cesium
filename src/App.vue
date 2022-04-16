<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const Cesium = this.cesium

      const viewer = new Cesium.Viewer('cesiumContainer')
      viewer._cesiumWidget._creditContainer.style.display = 'none' // 隐藏版权
      Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwOWQyZTk2Yy00OGI4LTQ3ZjgtODQwZS00YWI5YzU5YjUyNjciLCJpZCI6ODk5MTAsImlhdCI6MTY1MDAwNDkzNH0.V-28M5vTVUwX94ZOs5Qh10w8FIKcLp8RKCK8H6-t_RE'
      viewer.imageryLayers.addImageryProvider(
        new Cesium.WebMapTileServiceImageryProvider({
          url: 'http://t0.tianditu.gov.cn/cia_w/wmts?tk=23f1c0be4447017654018116140c010c',
          layer: 'cia',
          style: 'default',
          tileMatrixSetID: 'w',
          format: 'tiles',
          maximumLevel: 18
        })
      )
      // 点
      viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(108, 34, 10),
        point: {
          // 点大小
          pixelSize: 5,
          // 颜色
          color: Cesium.Color.fromCssColorString('#ee0000'),
          // 边框颜色
          outlineColor: Cesium.Color.fromCssColorString('#fff'),
          // 边框像素
          outlineWidth: 2,
          // 是否显示
          show: true
        }
      })
      // 线
      viewer.entities.add({
        polyline: {
          // 起始位置
          positions: Cesium.Cartesian3.fromDegreesArray([
            100.9677706, 30.7985748,
            90.20, 34.55
          ]),
          // 宽
          width: 2,
          // 颜色
          material: Cesium.Color.WHITE,
          // 顺序
          zIndex: 10,
          // 是否显示
          show: true
        }
      })
      // 面
      viewer.entities.add({
        polygon: {
          hierarchy: {
            // 范围
            positions: Cesium.Cartesian3.fromDegreesArray([
              120.9677706, 30.7985748,
              110.20, 34.55,
              120.20, 50.55
            ]),
            // 被掏空区域
            holes: [{
              positions: Cesium.Cartesian3.fromDegreesArray([
                119, 32,
                115, 34,
                119, 40
              ])
            }]
          }
        },
        // 边框
        outline: true,
        // 边框颜色
        outlineColor: Cesium.Color.WHITE,
        // 边框尺寸
        outlineWidth: 2,
        // 填充的颜色
        material: Cesium.Color.GREEN.withAlpha(0.5),
        // 是否被材质填充
        fill: true,
        // 恒定高度
        height: 5000,
        // 显示在距相机的距离处的属性，多少区间内是可以显示的
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(1000, 10000000),
        // 是否显示
        show: true,
        // 顺序
        zIndex: 10
      })
    }
  }

}
</script>

<style lang="less" scoped>
#cesiumContainer{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
