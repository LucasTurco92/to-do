import getListConfig from "../getListConfig";

test('when it call the getListConfig, should return a valid completed config and a pending config', ()=>{
  const [ pending,completed ] = getListConfig();
  
  expect(completed.color).toBe('var(--green)');
  expect(completed.title).toBe('Completed');
  expect(pending.color).toBe('var(--orange)');
  expect(pending.title).toBe('Pending');
});