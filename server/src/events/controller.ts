import { 
    JsonController, Authorized, CurrentUser, Post, Param, HttpCode, Get, 
    Body
  } from 'routing-controllers'
  import User from '../users/entity'


@JsonController()
export default class EventController {

@Get('/events')
getGame(
  @Param('id') id: number,
) {
  return id
}


@Get('/events')
// const limit = req.query.limit || 9 -- hoe werkt dit in TypeORM? Of moet dit in client?
// const offset = req.query.offset || 0
async getEvents() {
  return event
}

@Authorized()
@Post('/events')
@HttpCode(201)
async createEvent(
  @CurrentUser() user: User,
  @Body('id') event: Event
) {
 const event = await Event.create().save
  return event
}