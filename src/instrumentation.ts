export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { version } = await import('node:process');
    console.info('[node-version:runtime]', version);
  }
}
