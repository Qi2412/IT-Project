import moment from 'moment'; 
export const formattedDate = (dateStr) => {  
  return moment(dateStr).format('YYYY-MM-DD HH:mm:ss');  
}