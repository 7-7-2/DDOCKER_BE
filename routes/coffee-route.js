const express = require('express');
const router = express.Router();

router.get(
  '/coffee',
  (req, res) => {
    res.json('coffee');
  }
  // #swagger.tags = ['COFFEE']
  // #swagger.summary = '기간별 단일 유저 카페인 및 잔 수 조회'
  // #swagger.responses[200] = { description: 'OK' }
  // #swagger.responses[400] = { description: 'Bad Request' }
  // #swagger.responses[500] = { description: 'Internal Server Error' }
);

router.get(
  '/coffee/caffeine/:time',
  (req, res) => {
    res.json('caffeine');
  }
  // #swagger.tags = ['COFFEE']
  // #swagger.summary = '당일 유저 카페인 및 브랜드 조회'
  // #swagger.responses[200] = { description: 'OK' }
  // #swagger.responses[400] = { description: 'Bad Request' }
  // #swagger.responses[500] = { description: 'Internal Server Error' }
  // #swagger.parameters['time'] = { in: 'path', description: 'day,week,month,year' }
);

module.exports = router;

// routes => 서버에 요청이 들어올 때 URI의 path에 따라 필요한 controller로 이어주는 역할만 담당
