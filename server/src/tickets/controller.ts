import { 
    JsonController, Authorized, Post, Param, HttpCode, NotFoundError, Patch, Get
  } from 'routing-controllers'
  import User from '../users/entity'
  import Ticket from './entity'

  @JsonController()
  export default class TicketController {
  
    @Authorized()
    @Post('/tickets/:id')
    @HttpCode(201)
    async createTicket(
     // @Body () ticket: Ticket,
     // @Param ('id') id: number,
     // @CurrentUser() user: User
    ) {
      const newTicket = await Ticket.create().save()
      return newTicket
    }
  
    @Authorized()
    // the reason that we're using patch here is because this request is not idempotent
    // http://restcookbook.com/HTTP%20Methods/idempotency/
    // try to fire the same requests twice, see what happens
    @Patch('/tickets/:id')
    async updateTicket(
     // @CurrentUser() user: User,
      @Param('id') ticketId: number,
      //@Body() update,
    ) {
      const ticket = await Ticket.findOne(ticketId)
      if (!ticket) throw new NotFoundError(`Ticket does not exist`)
  
    //   const player = await Player.findOne({ user, game })
  
    //   if (!player) throw new ForbiddenError(`You are not part of this game`)
    //   if (game.status !== 'started') throw new BadRequestError(`The game is not started yet`)
    //   if (player.color !== game.turn) throw new BadRequestError(`It's not your turn`)
    //   game.board = update.board
      
      await ticket.save()
      return ticket
    }
      
    @Authorized()
    @Get('/tickets/:id')
      @Param('id') id: number 
      
    @Authorized()
    @Get('/tickets')
     @Param('user') user: User
      

}