import request from '@/utils/request'

// 流程结构
export function processStructure(params) {
  return request({
    url: '/api/v1/workflow/ticket/process-structure',
    method: 'get',
    params
  })
}

// 新建工单
export function createWorkOrder(data) {
  return request({
    url: '/api/v1/workflow/ticket',
    method: 'post',
    data
  })
}

// 工单列表
export function workOrderList(params) {
  return request({
    url: '/api/v1/workflow/ticket',
    method: 'get',
    params
  })
}

// 处理工单
export function handleWorkOrder(data) {
  return request({
    url: '/api/v1/workflow/ticket/handle',
    method: 'post',
    data
  })
}

// 结束工单
export function unityWorkOrder(data) {
  return request({
    url: '/api/v1/workflow/ticket/finish',
    method: 'post',
    data
  })
}

// 转交工单
export function inversionWorkOrder(data) {
  return request({
    url: '/api/v1/workflow/ticket/transfer',
    method: 'post',
    data
  })
}

// 催办工单
export function urgeWorkOrder(data) {
  return request({
    url: '/api/v1/workflow/ticket/urge',
    method: 'post',
    data
  })
}

// 主动接单
export function activeOrder(data, workOrderId) {
  return request({
    url: `/api/v1/work-order/active-order/${workOrderId}`,
    method: 'put',
    data
  })
}

// 删除工单
export function deleteWorkOrder(workOrderId) {
  return request({
    url: `/api/v1/workflow/ticket/${workOrderId}`,
    method: 'delete'
  })
}

// 删除工单
export function reopenWorkOrder(id) {
  return request({
    url: `/api/v1/workflow/ticket/${id}`,
    method: 'delete'
  })
}
