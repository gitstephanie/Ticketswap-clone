import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Timestamp } from 'typeorm'
//import Ticket from '../tickets/entity'
import { IsString} from 'class-validator';

@Entity()
export default class Event extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  description: string

  @IsString()
  @Column('text')
  picture: string

  @Column('number')
  price: number

  @Column('timestamp')
  startDate: Timestamp

  @Column('timestamp')
  endDate: Timestamp

  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
//   @OneToMany(_ => Ticket, tickets => tickets.event, {eager:true})
//   tickets: Ticket[]

}