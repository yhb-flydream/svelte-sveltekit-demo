const database = new Map();

/** @param {string} userid */
export function getTodos(userid) {
  if (!database.has(userid)) {
    createTodo({ userid, description: 'Learn about API routes' });
  }

  return Array.from(database.get(userid).values());
}

/**
 * @param {{
 * 	userid: string;
 * 	description: string
 * }} opt
 */
export function createTodo({ userid, description }) {
  if (!database.has(userid)) {
    database.set(userid, new Map());
  }

  const todos = database.get(userid);

  const id = crypto.randomUUID();

  todos.set(id, {
    id,
    description,
    done: false
  });

  return {
    id
  };
}

/**
 * @param {{
 * 	userid: string;
 * 	id: string
 * 	done: boolean
 * }} opt
 */
export function toggleTodo({ userid, id, done }) {
  const todos = database.get(userid);
  todos.get(id).done = done;
}

/**
 * @param {{
 * 	userid: string;
 * 	id: string
 * }} opt
 */
export function deleteTodo({ userid, id }) {
  const todos = database.get(userid);
  todos.delete(id);
}
